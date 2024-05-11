import { createClient } from '@supabase/supabase-js'
import { Database } from './utils/supabase'
import endpoints from './endpoints'

export const supabase = createClient<Database>(
    'https://mmqgjgdwvcbhsxrbzotl.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tcWdqZ2R3dmNiaHN4cmJ6b3RsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDg0Njg4MywiZXhwIjoyMDMwNDIyODgzfQ.S1XF0Pmg_p1TMZlZa3TNNJlDaCZUY8Fwsg7QPVlOiYk'
     , {
        auth : {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
        }
     })

