'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerUser } from '@/actions/users-actions';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const { name, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      alert("Passwords no coinciden");
      return;
    }

    try {
      const userData = await registerUser({ name, email, password });
      console.log(userData);
      alert("Registration successful!");
    } catch (error: any) {
      alert('El email está en uso');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Nombre:</label>
            <input
              {...register("name", { required: "El nombre es obligatorio" })}
              type="text"
              id="name"
              className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email:</label>
            <input
              {...register("email", { 
                required: "El email es obligatorio", 
                pattern: { 
                  value: /^\S+@\S+\.\S+$/, 
                  message: "Email inválido" 
                } 
              })}
              type="email"
              id="email"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">Password:</label>
            <input
              {...register("password", { 
                required: "La contraseña es obligatoria", 
                minLength: { 
                  value: 8, 
                  message: "La contraseña debe tener al menos 8 caracteres" 
                } 
              })}
              type="password"
              id="password"
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="confirmPassword">Confirma el Password:</label>
            <input
              {...register("confirmPassword", { required: "Confirma tu contraseña" })}
              type="password"
              id="confirmPassword"
              className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn-primary">
              Registro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
