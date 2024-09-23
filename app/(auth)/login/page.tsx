'use client'

import Link from 'next/link'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import Image from 'next/image'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { FormButton } from '@/components/ui/form-button'
import { loginAction } from '../action'

export default function Login() {

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
                    <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email to sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={loginAction}>
                        <div className="grid gap-4">
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
                            <FormButton text="Sign in" />
                        </div>
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
                        Don&#39;t have an account?{' '}
                        <Link href="/register" className="font-semibold text-primary hover:underline">
                            Sign up
                        </Link>
                    </div>
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Forgot your password?{' '}
                        <Link href="/" className="font-semibold text-primary hover:underline">
                            Reset it
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
