import { Search, ShoppingCart, User } from "lucide-react";

function Profile() {
  return (
    <div className="hidden items-center justify-center gap-[44.25px] md:flex">
      <Search size={22} />
      <ShoppingCart size={22} />
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100/20">
        <User size={22} />
      </span>
    </div>
  );
}

export default Profile;
