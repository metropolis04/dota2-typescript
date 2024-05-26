import { createClient } from '@supabase/supabase-js'
import { Database } from './utils/supabaseTypes'
import endpoints from './endpoints'

export const supabase = createClient<Database>(
    'https://hvazzksemczbiehbohtw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2YXp6a3NlbWN6YmllaGJvaHR3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjc0NjU4MSwiZXhwIjoyMDMyMzIyNTgxfQ.vKtLsZsL8cbdJssAQE7HpKgMxYp7SUzS0y-xWUz2q3A'
     , {
        auth : {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
        }
     })