import SignUpForm from "../../components/auth/signup/SignUp_Form";

export default function SignUp() {
  return (
    <section>
      <div className="flex">
        <div className="flex w-1/2 h-screen bg-slate-700 sticky top-0 z-50 hidden xl:block">
          h
        </div>
        <div className="flex-grow">
          <div className=" flex items-center justify-center w-full h-screen bg-slate-900">
            <div>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
