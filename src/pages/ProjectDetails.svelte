<script>
  import { useParams } from "svelte-navigator";

  const params = useParams();
  let { id } = $params;
  console.log("id", id);
</script>

{#if id === "1"}
  <main class="max-w-6xl mx-auto lg:px-16 px-8">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-start justify-between mb-4 outline-none">
        <h1
          class="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4 outline-none"
        >
          Hamro Patro Bank Rates
        </h1>
        <a
          href="https://bank-rates.hamropatro.com/"
          rel="noreferrer noopener"
          class="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
        >
          Explore
        </a>
      </div>

      <img
        class="rounded-xl border border-zinc-800"
        width={900}
        height={460}
        src="../../public/okok.png"
        alt="Bank Rates"
      />

      <div class="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
        <ul style="list-style-type: disc; padding-left: 20px;">
          <li>
            Bank Rates Viewing: Developed functionality to display current bank
            rates, ensuring users have access to up-to-date financial
            information from Nepali banks.
          </li>
          <li>
            Bank Scheme Comparison: Created a feature enabling users to compare
            schemes offered by various Nepali banks, empowering them to make
            informed financial decisions.
          </li>
          <li>
            EMI Calculator: Designed and integrated an EMI calculator to help
            users estimate their equated monthly installments based on loan
            amount, interest rate, and tenure.
          </li>
          <li>
            Interest Rate Tools: Implemented tools for calculating the rate
            required for doubling an investment and determining the time it
            takes for an investment to double, enhancing financial planning
            capabilities.
          </li>
        </ul>
      </div>
    </div>
  </main>
{:else if id === "2"}
  <main class="max-w-6xl mx-auto lg:px-16 px-8">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-start justify-between mb-4 outline-none">
        <h1
          class="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4 outline-none"
        >
          Hamro Health
        </h1>
        <a
          href="https://health.hamropatro.com/"
          rel="noreferrer noopener"
          class="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
        >
          Explore
        </a>
      </div>

      <img
        class="rounded-xl border border-zinc-800"
        width={900}
        height={460}
        src="../../public/health photo.png"
        alt="Hamro Health"
      />

      <div class="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
        <ul style="list-style-type: disc; padding-left: 20px;">
          <li>
            User Preference Customization: Designed and integrated functionality
            for users to customize their preferences within the app, including
            weight and height preferences of user unit of choose, enhancing user
            experience and streamlining healthcare access.
          </li>
          <li>
            Doctor Profile Sharing: Developed a feature allowing users to share
            doctor profiles with others via QR code scanning or clipboard copy,
            enabling efficient communication and referral processes.
          </li>
          <li>
            QR Code Integration: Integrated QR code generation and scanning
            capabilities within the app to facilitate seamless sharing of doctor
            profiles, ensuring data accuracy and security.
          </li>
          <li>
            Clipboard Copy Functionality: Implemented functionality to copy
            doctor profiles to the clipboard for easy sharing via messaging apps
            or other communication channels, enhancing accessibility and user
            convenience.
          </li>
        </ul>
      </div>
    </div>
  </main>
{:else if id === "3"}
  <main class="max-w-6xl mx-auto lg:px-16 px-8">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-start justify-between mb-4 outline-none">
        <h1
          class="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4 outline-none"
        >
          Hamro Jytoish
        </h1>
        <a
          href="https://jyotishsewa.hamropatro.com/j_c_np"
          rel="noreferrer noopener"
          class="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
        >
          Explore
        </a>
      </div>

      <img
        class="rounded-xl border border-zinc-800"
        width={900}
        height={460}
        src="../../public/jyotish photo.png"
        alt="Hamro Jyotish"
      />

      <div class="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
        <ul style="list-style-type: disc; padding-left: 20px;">
          <li>
            Testimonial Integration: Designed and implemented a feature to
            display user testimonials prominently on the Hamro Jyotish website,
            showcasing authentic feedback and experiences from satisfied users.
          </li>
          <li>
            Attractive Testimonial Layout: Created visually appealing layouts
            for testimonials, incorporating engaging design elements and
            compelling copy to capture users' attention and evoke trust.
          </li>
          <li>
            Jyotish Call Integration: Integrated a feature enabling users to
            directly connect with Jyotish experts via phone or video call for
            personalized astrological consultations, enhancing user experience
            and accessibility to astrological services.
          </li>
        </ul>
      </div>
    </div>
  </main>
{/if}
