
import { NextResponse, NextRequest } from 'next/server'
import { dbSeeder } from '../../../../prisma/seeders/seed';

export async function GET(request: Request) { 

  
  dbSeeder() 
  

  return NextResponse.json({ message: 'Seed Executed' });
}