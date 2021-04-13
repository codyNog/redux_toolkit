import { useUserItem } from "~/store/hooks/organisms/UserItem";

export const UserItem: React.FC = () => {
  const { user } = useUserItem();

  return (
    <div>
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </div>
  );
};
