import Image from "next/image";

// Cards
import SettingsMenu from "@/components/Menu/SettingsMenu";

export default function Team() {
  return (
    <>
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">Team settings</h1>
        <p className="font- text-slate-600">Manage your team settings here</p>
      </div>
      <hr className="mt-4 mb-8" />
      <p className="py-2 text-xl font-semibold">Team Information</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">Your team name is <strong>Karaaslan</strong></p>
        <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button>
      </div>
      <hr className="mt-4 mb-8" />
      <p className="py-2 text-xl font-semibold">Team Members</p>
      <table className="w-full py-2">
        <thead>
          <tr>
            <th className="text-left text-gray-600">Name</th>
            <th className="text-left text-gray-600">Role</th>
            <th className="text-left text-gray-600">Email</th>
            <th className="text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 gap-4">
          <tr>
            <td className="text-gray-600">Kuray Karaaslan</td>
            <td className="text-gray-600">Admin</td>
            <td className="text-gray-600">kuraykaraaslan@gmail.com</td>
            <td className="text-gray-600">
            <button className="btn btn-ghost text-sm font-semibold decoration-2">Remove</button>
            </td>
          </tr>
          <tr>
            <td className="text-gray-600">Kwankitiya Karaaslan</td>
            <td className="text-gray-600">Member</td>
            <td className="text-gray-600">kwankitiyakaraaslan@gmail.com</td>
            <td className="text-gray-600">
              <button className="btn btn-ghost text-sm font-semibold decoration-2">Remove</button>
            </td>
          </tr>
          <tr>
            <td className="text-gray-600"><input type="text" className="w-max-32 flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter name" /></td>
            <td className="text-gray-600">
              <select className="w-max-32 flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none">
                <option>Admin</option>
                <option>Member</option>
              </select>
            </td>
            <td className="text-gray-600"><input type="email" className="w-max-32 flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter email" /></td>
            <td className="text-gray-600">
              <button className="btn btn-ghost text-sm font-semibold decoration-2">Invite</button>
            </td>
          </tr>

        </tbody>
      </table>
    </>
  );
}


      