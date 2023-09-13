import { ProfileType } from "@/database/UserProfile";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  handleClick: () => void;
  disableCondition: boolean | undefined;
}

const ApplyNowButton: React.FC<Props> = ({ handleClick, disableCondition }) => {
  const { data: session } = useSession();
  const profile = session?.user.userProfile as ProfileType;

  return (
    <div>
      {session?.user ? (
        <div>
          {profile.client ? (
            <button
              onClick={() => {}} //need to handle errors
              className="px-3 md:px-4 py-1.5 md:py-2  rounded-sm bg-slate-800 text-sm text-white hover:shadow-lg">
              Apply now
            </button>
          ) : (
            <button
              onClick={handleClick}
              disabled={disableCondition}
              className="px-3 md:px-4 py-1.5 md:py-2  rounded-sm bg-slate-800 text-sm disabled:text-black text-white hover:shadow-lg">
              Apply now
            </button>
          )}
        </div>
      ) : (
        <Link
          href="/auth/login"
          className="px-3 md:px-4 py-1.5 md:py-2  rounded-sm bg-slate-800 text-sm text-white hover:shadow-lg">
          Apply now
        </Link>
      )}
    </div>
  );
};

export default ApplyNowButton;
