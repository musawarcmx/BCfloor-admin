'use client'
import { useMemo } from "react";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewPassword() {
    const [password, setPassword] = React.useState('')
    const [errors, setErrors] = React.useState<{ password: boolean }>({
        password: false,
    })
    const checkStrength = (pass: string) => {
        const requirements = [
            /.{8,}/,
            /[0-9]/,
            /[a-z]/,
            /[A-Z]/,
            /[^A-Za-z0-9]/,
        ];
        return requirements.filter((regex) => regex.test(pass)).length;
    };

    const strengthScore = useMemo(() => checkStrength(password), [password]);

    const getSegmentColor = (index: number, score: number) => {
        if (score === 0) return "bg-gray-200";
        if (score <= 2) return index === 0 ? "bg-red-500" : "bg-gray-200";
        if (score <= 4)
            return index < 2 ? "bg-amber-500" : "bg-gray-200";
        return "bg-emerald-500";
    };


    const handleSave = () => {

        const newErrors = {
            password: password.trim() === '' || password.length < 6,
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
                    <label className={`text-[14px] font-[500] ${errors.password ? 'text-red-500' : ''}`} htmlFor="password">Enter New Password</label>
                    <Input
                        id="password"
                        type="password"
                        className={`h-[42px] border-[2px] border-solid rounded-[6px] focus:outline-none ${errors.password ? 'border-red-500' : 'border-[#BBBBBB]'
                            }`}
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password && e.target.value.trim() !== '') {
                                setErrors(prev => ({ ...prev, password: false }));
                            }
                        }}
                        aria-label="Password"
                        aria-invalid={strengthScore < 5}
                        aria-describedby="password-strength"
                        required
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm mt-1">Password must be at least 6 characters long.</span>
                    )}

                </div>
                <div className="flex h-1.5 w-full rounded-full overflow-hidden" role="progressbar"
                    aria-valuenow={strengthScore}
                    aria-valuemin={0}
                    aria-valuemax={5}
                    aria-label="Password strength">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`flex-1 transition-all duration-500 ease-out ${index !== 2 ? "mr-1" : ""} ${getSegmentColor(index, strengthScore)}`}
                        />
                    ))}
                </div>
                <Button onClick={handleSave} className='flex justify-center items-center bg-[#4290E9] hover:bg-[#357AD1] rounded-[6px] h-[42px] font-[600] text-[20px] text-[white]'>Save</Button>
                <div className='flex justify-center'>
                    <Link href="/login-user" className='w-fit text-[#4290E9] border-b-[1px] leading-[18px] border-[#4290E9] text-[16px] font-[400] text-center'>Back to Login</Link>
                </div>
                <p className='text-[10px] text-[#666666] font-[400] mx-auto'>Powered by Tojuco Software 2025</p>
            </div>
        </div>
    )
}

export default NewPassword