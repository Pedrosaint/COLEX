// import signUpImage from "../../assets/image/signup-image.png";
// import backgroundImage from "../../assets/image/bg-image.png";
// import Logo from "../../assets/logo/logo.png";
// import { useState } from "react";
// import { BsEye, BsEyeSlash } from "react-icons/bs";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { validationSchema } from "../auth-schema";

// const CreateAccount = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   interface CreateAccountFormData {
//     name: string;
//     email: string;
//     token: string;
//     password: string;
//   }

//   const onSubmit = (data: CreateAccountFormData) => console.log(data);

//   return (
//     <div
//       className="min-h-screen flex flex-col justify-center py-12  md:py-10 md:px-20 xl:px-100"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="flex border-5 border-gray-500 rounded-2xl">
//         <div className="w-1/2 relative">
//           <img
//             src={signUpImage}
//             alt="Background"
//             className="h-full w-full object-cover"
//           />

//           {/* <div className="absolute bottom-[47%] left-[25%]">
//             <img src={Logo} alt=" " />
//             <p className="absolute top-5 left-19 text-[#ffffff] text-3xl font-semibold">
//               COLEX
//             </p>
//           </div> */}
//         </div>

//         <div className="w-1/2 rounded-r-2xl backdrop-blur-md px-6">
//           <div className="mt-15">
//             <h2 className="text-3xl font-bold text-gray-50">Super Admin</h2>
//             <p className="text-[12px] text-[#FFFFFF]">
//               Let's get you all set up so you can access the admin account.
//             </p>
//           </div>

//           <div className="mt-6">
//             <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
//               {/* Name */}
//               <div className="">
//                 <div className="input-group relative my-4">
//                   <input
//                     {...register("name")}
//                     type="text"
//                     name="name"
//                     id="name"
//                     required
//                     className={`w-full px-3 py-2 text-white border rounded-sm focus:outline-none focus:ring-1  peer ${
//                       errors.name
//                         ? "border-[#FF8682] focus:ring-[#FF8682]"
//                         : "border-gray-300 focus:ring-gray-200"
//                     }`}
//                     placeholder=" "
//                   />
//                   <label
//                     htmlFor="name"
//                     className="absolute left-3 top-2 text-white text-sm transition-all 
//                       peer-placeholder-shown:text-base 
//                       peer-placeholder-shown:text-gray-300 
//                       peer-placeholder-shown:top-2 
//                       peer-focus:top-[-12px]
//                       peer-not-placeholder-shown:top-[-11px]
//                        peer-not-placeholder-shown:bg-black/100
//                        peer-not-placeholder-shown:px-2
//                       peer-focus:text-sm 
//                       peer-focus:text-gray-100 
//                       peer-focus:bg-black/90
//                       peer-focus:px-2 
//                       peer-focus:backdrop-blur-4xl"
//                   >
//                     {errors.name ? (
//                       <span className="text-[#FF8682]">Name</span>
//                     ) : (
//                       <span className="text-gray-400">Name</span>
//                     )}
//                   </label>
//                   {errors.name && (
//                     <p className="text-[#FF8682] text-xs mt-1 flex justify-end">
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="">
//                 <div className="input-group relative my-4">
//                   <input
//                     {...register("email")}
//                     type="email"
//                     name="email"
//                     id="email"
//                     required
//                     className={`w-full px-3 py-2 text-white border rounded-sm focus:outline-none focus:ring-1  peer ${
//                       errors.email
//                         ? "border-[#FF8682] focus:ring-[#FF8682]"
//                         : "border-gray-300 focus:ring-gray-200"
//                     }`}
//                     placeholder=" "
//                   />
//                   <label
//                     htmlFor="email"
//                     className="absolute left-3 top-2 text-white text-sm transition-all 
//                       peer-placeholder-shown:text-base 
//                       peer-placeholder-shown:text-gray-300 
//                       peer-placeholder-shown:top-2 
//                       peer-focus:top-[-12px] 
//                       peer-focus:text-sm 
//                       peer-focus:text-gray-100 
//                         peer-not-placeholder-shown:top-[-11px]
//                          peer-not-placeholder-shown:bg-black/100
//                          peer-not-placeholder-shown:px-2
//                       peer-focus:bg-black/90 
//                       peer-focus:px-2
//                       peer-focus:backdrop-blur-4xl"
//                   >
//                     {errors.email ? (
//                       <span className="text-[#FF8682]">Email</span>
//                     ) : (
//                       <span className="text-gray-400">Email</span>
//                     )}
//                   </label>
//                   {errors.email && (
//                     <p className="text-[#FF8682] text-xs mt-1 flex justify-end">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Token */}
//               <div className="">
//                 <div className="input-group relative">
//                   <input
//                     {...register("token")}
//                     type="text"
//                     name="token"
//                     id="token"
//                     required
//                     className="w-full px-3 py-2 text-white border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-200 peer"
//                     placeholder=" "
//                   />
//                   <label
//                     htmlFor="token"
//                     className="absolute left-3 top-2 text-white text-sm transition-all 
//                       peer-placeholder-shown:text-base 
//                       peer-placeholder-shown:text-gray-300 
//                       peer-placeholder-shown:top-2 
//                       peer-focus:top-[-12px] 
//                       peer-focus:text-sm 
//                       peer-focus:text-gray-100
//                         peer-not-placeholder-shown:top-[-11px] 
//                          peer-not-placeholder-shown:bg-black/100
//                          peer-not-placeholder-shown:px-2
//                       peer-focus:bg-black/90 
//                       peer-focus:px-2
//                       peer-focus:backdrop-blur-4xl"
//                   >
//                     Token
//                   </label>
//                   {errors.token && (
//                     <p className="text-[#FF8682] text-xs mt-1 flex justify-end">
//                       {errors.token.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Password */}
//               <div className="">
//                 <div className="input-group relative">
//                   <input
//                     {...register("password")}
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     id="password"
//                     required
//                     className="w-full px-3 py-2 text-white border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-200 peer"
//                     placeholder=" "
//                     // style={
//                     //   !showPassword
//                     //     ? ({
//                     //         fontFamily: "monospace",
//                     //         WebkitTextSecurity: "disc",
//                     //         textSecurity: "asterisk",
//                     //       } as any)
//                     //     : {}
//                     // }
//                   />
//                   <label
//                     htmlFor="password"
//                     className="absolute left-3 top-2 text-white text-sm transition-all 
//                       peer-placeholder-shown:text-base 
//                       peer-placeholder-shown:text-gray-300 
//                       peer-placeholder-shown:top-2 
//                       peer-focus:top-[-12px] 
//                       peer-focus:text-sm 
//                       peer-focus:text-gray-100 
//                       peer-not-placeholder-shown:top-[-11px]
//                       peer-not-placeholder-shown:bg-black/100
//                       peer-not-placeholder-shown:px-2
//                       peer-focus:bg-black/90 
//                       peer-focus:px-2
//                       peer-focus:backdrop-blur-4xl"
//                   >
//                     Password
//                   </label>

//                   <button
//                     type="button"
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white focus:outline-none"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <BsEyeSlash className="h-5 w-5" />
//                     ) : (
//                       <BsEye className="h-5 w-5" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-[#FF8682] text-xs -mt-3 flex justify-end">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               <div className="flex items-center">
//                 <input
//                   id="terms"
//                   name="terms"
//                   type="checkbox"
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="terms"
//                   className="ml-2 block text-sm text-gray-50"
//                 >
//                   I agree to all the{" "}
//                   <span className="text-[#C48ADF]">Terms</span> and{" "}
//                   <span className="text-[#C48ADF]">Privacy Policies</span>
//                 </label>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-xm shadow-sm text-sm font-medium mt-15 text-white bg-[#8000BD] ${
//                     isLoading
//                       ? "opacity-70 cursor-not-allowed"
//                       : "cursor-pointer"
//                   }`}
//                 >
//                   {isLoading ? "Creating..." : "Create Account"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateAccount;
