import { ProfileType } from "@/database/UserProfile";

interface Props {
  profile: ProfileType;
}

const MainDetail: React.FC<Props> = ({ profile }) => {
  return (
    <div className=" w-full h-full py-4 font-medium">
      <div className="w-full h-full p-2 md:p-4 rounded-md border">
        <main className="w-full flex gap-6 p-2 md:p-4">
          <section className="w-[110px] md:w-1/3">
            <div className="w-[100px] h-[100px] bg-blue-500 rounded-full"></div>
          </section>

          <section className="md:w-2/3">
            <h1 className="font-bold text-lg md:text-2xl ">
              {profile.firstName} {profile.lastName}
            </h1>
            <p className="text-sm ">
              {profile.city} {profile.country}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MainDetail;
