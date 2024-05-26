import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'
import { supabase } from '../supabase';


export const supabaseApi = {

    getPlayers : async () => {
        const countriesWithCitiesQuery = supabase
        .from("testtable")
        .select('*');
        type CountriesWithCities = QueryData<typeof countriesWithCitiesQuery>;
        const { data, error } = await countriesWithCitiesQuery;
        
        if (error) throw error;
        const countriesWithCities: CountriesWithCities = data;
        return countriesWithCities
    }
}

