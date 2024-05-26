import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'
import { supabase } from '../supabase';
export const dynamic = 'force-dynamic'
export const revalidate = 0
import { cookies } from 'next/headers'

export const supabaseApi = {

    getPlayers : async () => {
        const countriesWithCitiesQuery = supabase
        .from("custom_players")
        .select('name');
        type CountriesWithCities = QueryData<typeof countriesWithCitiesQuery>;
        const { data, error } = await countriesWithCitiesQuery;
        
        if (error) throw error;
        const countriesWithCities: CountriesWithCities = data;
        return countriesWithCities
    }
}

