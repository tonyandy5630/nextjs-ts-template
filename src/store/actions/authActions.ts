import { loginAPI } from '@/apis/auth.api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '@/types/auth'
import { ResponseAPI } from '@/types'
import { toast } from 'react-toastify'
import { error } from 'console'

export const loginUser = createAsyncThunk(
    'auth/login',
    async (user: Omit<User, 'token' | 'email' | 'fullname'>) => {
        try {
            const body = {
                username: user.username,
                password: user.password,
            }
            const { data } = await loginAPI(body)
            if (!data.data) {
                new Error('No user data')
            }
            return data
        } catch (e: any) {
            toast(e.message)
        }
    }
)
