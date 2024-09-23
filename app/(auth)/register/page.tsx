'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Mail } from 'lucide-react'
import { useFormState } from 'react-dom'
import { FormState, registerAction } from '../action'
import { FormButton } from '@/components/ui/form-button'

const initialState: FormState = {
    message: "",
};

export default function Register() {
    const [state, formAction] = useFormState(registerAction, initialState);

    return (
        <div className="px-3 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/avatar.jpg"
                            alt="Logo"
                            width={64}
                            height={64}
                            priority
                            className='rounded-full'
                        />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                    <CardDescription className="text-center">
                        Enter your information to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={formAction}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name='email'
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name='password'
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    name='confirm-password'
                                    required
                                />
                            </div>
                            <FormButton text="Create Account" />
                        </div>
                        <div className="text-green-700 text-center mt-4">{state.message}</div>
                        <div className="text-red-700 text-center mt-4">{state.error}</div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="flex justify-center text-xs uppercase">
                        <span className="px-2">
                            Or continue with
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full">
                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                            Github
                        </Button>
                        <Button variant="outline" className="w-full">
                            <Mail className="mr-2 h-4 w-4" />
                            Google
                        </Button>
                    </div>
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Already have an account?{' '}
                        <Link href="/login" className="font-semibold text-primary hover:underline">
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
