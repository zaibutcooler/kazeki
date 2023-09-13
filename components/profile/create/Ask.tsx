interface Props {
  chooseClient: () => void;
  chooseSeeker: () => void;
}

const Ask: React.FC<Props> = ({ chooseClient, chooseSeeker }) => {
  return (
    <div className="max-w-[400px] h-[250px] w-full px-6 py-8 bg-white shadow-md mx-3">
      <div className="text-xl font-semibold mb-6 text-center">
        Are you an employer or a job-seeker?
      </div>
      <section className="w-full flex justify-between">
        <button
          className="px-4 py-2 bg-gray-800 text-white"
          onClick={chooseClient}>
          An Employer
        </button>
        <button
          className="px-4 py-2 bg-gray-800 text-white"
          onClick={chooseSeeker}>
          A Job-Seeker
        </button>
      </section>
    </div>
  );
};

export default Ask;
