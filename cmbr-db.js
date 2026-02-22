import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
 
const supabase = createClient("https://gznwukvlbtjcqwmbnewl.supabase.co", "sb_publishable_NT8m2k3dpfGgcob3H7uBcA_iFpiSy5a");

/**
 * @interface
 * @description This file is for database interactions. It uses Supabase as a backend and provides functions to interact with the database.
 * @author Camberden (Chrispy | Kippi)
 * @constant CMBRdb
 * - This is an array that can be used to store data locally if needed.
 * @function CMBRdbSelect
 * - This function takes a string argument for the select query and returns the data from the database.
 * - It uses the Supabase client to interact with the database and handles errors appropriately.
 * @export
 * - The functions and constants in this file are exported for use in other parts of the application.
 */
const CMBRdb = {

  verify: async () => {
    const { data, error } = await supabase.auth.linkIdentity({ provider: 'github' });
    return data;
  },

  identify: async () => {
    const { data: identities, error: identitiesError } = await supabase.auth.getUserIdentities();
    return data;
  },

  querySelect: async (query) => {
    try {
      const { data, error } = await supabase
        .from('cmbr-blog-sbdb')
        .select();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  },

  querySelectWhere: async (query) => {
    try {
      const { data, error } = await supabase
      .from('cmbr-blog-sbdb')
      .select('title, date')
      .eq('location', 'Pittsboro, NC')    // Correct
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  },

  queryInsertPost: async (query) => {
    const { error } = await supabase
    .from('cmbr-blog-sbdb')
    .insert({
  "created_on": null,
  "title": "Pending",
  "date": null,
  "location": "Pending",
  "time": null,
  "tags": [],
  "image_path": "Pending",
  "post": "Your post content here",  // Add actual content
  "user_id": "zzz99"
});
  }

} //*===*===*===| END |===*===*===*//

export { CMBRdb, supabase };