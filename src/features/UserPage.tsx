import { useStores } from "../models/root-store/root-store-context";

export function UserPage() {
  const { user } = useStores();

  return (
    <div className="bg-gray-800 min-h-full flex">
      <div className="m-auto">{user.login}</div>
      <img src={user.avatarUrl} alt="Profile_Pic" />
    </div>
  );
}
