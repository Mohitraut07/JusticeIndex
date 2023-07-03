import React from 'react'

function Login() {
  return (
    <>
          <div class="bg-cover bg-center bg-fixed bg-no-repeat">
        <div class="login_window bg-slate-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col p-8 rounded-md">
          <span class="pb-5 text-2xl font-bold">Login to Access Database</span>
          <form action="" method="get" class="flex flex-col gap-4">
            <input
              type="email"
              name="adminEmail"
              id="email"
              placeholder="Email"
              required
              class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"
            />
            <input
              type="password"
              name="adminPassword"
              id="password"
              placeholder="Password"
              required
              class="px-4 py-2 border-2 border-gray-400 rounded-md text-base outline-none"
            />
            <input
              type="submit"
              value="Login"
              class="px-4 py-2 border-2 border-gray-900 rounded-md cursor-pointer bg-red-200 hover:bg-red-600 hover:text-white active:bg-red-900"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login