import { Avatar, AvatarImage, AvatarFallback } from "./primitives/Avatar";

export const UserAvatar: React.FC<{ imageUrl: string; className?: string }> = ({
  imageUrl,
  className,
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={imageUrl} />
      <AvatarFallback>OG</AvatarFallback>
    </Avatar>
  );
};

export const MyAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <UserAvatar
    className={className}
    imageUrl="https://avatars.githubusercontent.com/u/92731861?v=4"
  />
);
