import OtherDetail from "@/components/profile/detail/OtherDetail";

export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <OtherDetail profileID={params.id} />
    </div>
  );
}
