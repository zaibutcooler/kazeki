import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { UserType } from "@/database/User";
import { ProfileType } from "@/database/UserProfile";
import { setBox } from "@/store/boxSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown, AiOutlineProfile, AiOutlineUp } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { useDispatch } from "react-redux";

interface Props {
  item: JobApplicationType;
}

const JobApplicationCard: React.FC<Props> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const profile = session?.user.userProfile as ProfileType;
  const dispatch = useDispatch();

  const offer: JobOfferType = item.job as any;
  const offerUser: UserType = offer.user as any;

  return (
    <div className="w-full border rounded-sm min-h-24 py-2 px-3 text-xs">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium cursor-pointer">
          <h1 className="py-1">{item.title}</h1>
        </div>
        <div className="flex gap-2 font-semibold text-xs">
          <button className=" rounded-sm border p-1">
            <FaFileAlt />
          </button>
          <button
            className=" rounded-sm border p-1"
            onClick={() => setOpen(!open)}>
            {open ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>
        </div>
      </div>
      <div>
        <span>
          {profile.client ? (
            <Link
              href={`/home/profile/${profile._id}`}
              className="text-gray-700 text-[0.6rem]">
              By{" "}
              <span className="font-medium text-black">
                {profile.firstName} {profile.lastName}
              </span>
            </Link>
          ) : (
            <Link
              href={`/home/profile/${offerUser.userProfile._id}`}
              className="text-gray-700 text-[0.6rem]">
              To{" "}
              <span className="font-medium text-black">
                {offerUser.userProfile.firstName}{" "}
                {offerUser.userProfile.lastName}
              </span>
            </Link>
          )}
        </span>
      </div>

      {open && (
        <div className="mt-2">
          <p className="text-gray-700 text-xs mb-2">{item.description}</p>
          <div className="flex justify-end mb-2">
            {profile.client ? (
              <button
                className="py-1.5 px-3 rounded-sm bg-slate-800 text-white"
                onClick={() => {
                  dispatch(setBox({ currentBox: "jobReply", id: item._id }));
                }}>
                Pass
              </button>
            ) : (
              <div>
                {item.approved ? (
                  <p className="py-1.5 px-3 rounded-sm font-medium bg-white text-slate-800">
                    Pending...
                  </p>
                ) : (
                  <Link
                    href="/home/job-seeking/interviews"
                    className="py-1.5 px-3 rounded-sm bg-slate-800 text-white">
                    See The Reply
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicationCard;
