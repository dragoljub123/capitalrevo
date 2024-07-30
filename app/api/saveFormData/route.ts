



// app/api/saveFormData/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log('Received data:', data);
    const { fullName, email, phone, goldRobot, forexRobot } = data;

    // Validate the received data
    if (!fullName || !email || !phone) {
      console.error('Validation failed:', { fullName, email, phone });
      return NextResponse.json({ message: 'Invalid form data.' }, { status: 400 });
    }

    const result = await client.create({
      _type: 'formSubmission',
      fullName,
      email,
      phone,
      goldRobot,
      forexRobot,
    });

    console.log('Sanity response:', result);

    return NextResponse.json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving form data:', );
    return NextResponse.json({ message: 'Failed to save form data.', error: "error" }, { status: 500 });
  }
}

