import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  handleClick: () => void;
  disableCondition: boolean | undefined;
}

const ApplyNowButton: React.FC<Props> = ({ handleClick, disableCondition }) => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <button
          onClick={handleClick}
          className="px-3 md:px-4 py-1.5 md:py-2  rounded-sm bg-slate-800 text-sm text-white hover:shadow-lg">
          Apply now
        </button>
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
