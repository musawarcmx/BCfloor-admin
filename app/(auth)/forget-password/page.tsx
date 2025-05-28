'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ForgotPassword() {
    const [email, setEmail] = React.useState('')
    const [errors, setErrors] = React.useState<{ email: boolean }>({
        email: false,
    })

    const handleSubmit = () => {
        const isValidEmail = (email: string) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

        const newErrors = {
            email: email.trim() === '' || !isValidEmail(email),
        };

        setErrors(newErrors)

        const hasError = Object.values(newErrors).some(Boolean)
        if (hasError) return

        // Proceed with login logic here (e.g., API call)
    }

    return (
        <div className='w-full flex justify-center items-start pt-[80px] px-[40px] md:px-0'>
            <div className='w-[400px] flex flex-col gap-[25px]'>
                <Image
                    src="/tojuco.png"
                    alt="logo"
                    width={180}
                    height={100}
                    className="mx-auto" />
                <div className='flex flex-col gap-[10px]'>
                    <label className={`text-[14px] font-[500] ${errors.email ? 'text-red-500' : ''}`} htmlFor="email">Email Address</label>
                    <Input
                        type='email'
                        placeholder='taylor.tayburn@mail.com'
                        className={`h-[42px] border-[2px] border-solid border-[#BBBBBB] rounded-[6px] ${errors.email ? 'border-red-500' : 'border-[#BBBBBB]'}`}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            if (errors.email && e.target.value.trim() !== '') {
                                setErrors(prev => ({ ...prev, email: false }))
                            }
                        }}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">Enter a valid email</span>
                    )}
                </div>
                <Button onClick={handleSubmit} className='flex justify-center items-center bg-[#4290E9] hover:bg-[#357AD1] rounded-[6px] h-[42px] font-[600] text-[20px] text-[white]'>Send Reset Link</Button>
                <div className='flex justify-center'>
                    <Link href="/login-user" className='w-fit text-[#4290E9] border-b-[1px] leading-[18px] border-[#4290E9] text-[16px] font-[400] text-center'>Back to Login</Link>
                </div>
                <p className='text-[10px] text-[#666666] font-[400] mx-auto'>Powered by Tojuco Software 2025</p>
            </div>
        </div>
    )
}

export default ForgotPassword