export default async function ConfirmPage({
    searchParams,
  }: {
    searchParams: { [key: string]: string | undefined };
  }) {
    const success = searchParams.success;
    if (success !== "true") {
      return (
        <div className="grid place-content-center py-24 text-2xl">
          Something went wrong, please try again.
        </div>
      );
    }
    return (
      <div className="grid place-content-center py-24 text-2xl">
        Thank you, you will hear from us soon via email.
      </div>
    );
  }