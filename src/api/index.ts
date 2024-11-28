import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../supabase";

export const useFetchCabins = (hall_id) => {
  return useQuery({
    queryKey: ["cabin", hall_id], // Unique query key
    queryFn: async () => {
      const { data, error } = await supabase
        .from("cabin")
        .select("*,student(*)")
        .eq("hall_id", hall_id);

      if (error) throw error;
      return data;
    }, // Function to fetch data
    enabled: !!hall_id, // Only fetch if hall_id exists
  });
};

export const useFetchHalls = () => {
  return useQuery({
    queryKey: ["hall"], // Unique query key
    queryFn: async () => {
      let { data, error } = await supabase
        .from("hall") //
        .select("*");

      if (error) throw error;
      return data || [];
    }, // Function to fetch data
  });
};

export const useFetchStudents = () => {
  return useQuery({
    queryKey: ["student"], // Unique query key
    queryFn: async () => {
      let { data, error } = await supabase
        .from("student") //
        .select("*,cabin(*,hall(*))");

      if (error) throw error;
      console.log({ data });
      return data;
    }, // Function to fetch data
  });
};

export const useInsertStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    async mutationFn(data: {
      name: string;
      email: string;
      aadhar_number: string;
      phone: string;
    }) {
      const { error, data: newStudent } = await supabase
        .from("student")
        .insert({ ...data })
        .select()
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return newStudent;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["student"]);
    },
  });
};

export const useUpdateCabin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    async mutationFn(data: {
      id: number;
      status?: string;
      assigned_to?: number;
    }) {
      const { error, data: newStudent } = await supabase
        .from("cabin")
        .update({ ...data })
        .eq("id", data.id)
        .select()
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return newStudent;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cabin"]);
    },
  });
};
