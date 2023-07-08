<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import WatermelonJSON from "/public/img/robot.json";

// Menginisialisasi variabel anim sebagai referensi Vue
let anim = ref();

// Menjalankan kode setelah komponen dipasang (mounted)
onMounted(() => {
  // Menunggu 500ms sebelum menjalankan kode berikutnya
  setTimeout(() => {
    // Menggunakan metode goToAndPlay dari animasi Lottie dengan parameter 150
    // untuk memulai animasi pada frame 150, dengan loop (true)
    console.log(anim.value.goToAndPlay(150, true));
    // Memanggil objek anim.value untuk menjalankan animasi Lottie
    anim.value.play();
  }, 500);
});

// Mendefinisikan properti komponen
const props = defineProps({
  canLogin: Boolean,
  canRegister: Boolean,
  slider: Array,
  about: Array,
  skill: Array,

  laravelVersion: { type: String, required: true },
  phpVersion: { type: String, required: true },
  options: {
    theme: {
      controlsView: "standard",
      active: "light",
      light: {
        color: "#3D4852",
        backgroundColor: "#fff",
        opacity: "0.7",
      },
      dark: {
        color: "#fff",
        backgroundColor: "#202020",
        opacity: "0.7",
      },
    },
  },
});
</script>

<template>
  <Head title="Welcome" />
  <nav>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center">
        <svg viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-8 mr-3">
          <path
            d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
            fill="#FF2D20" />
        </svg>
        <span class="self-center text-lg font-semibold whitespace-nowrap font-inter">Laravel</span>
      </a>
      <button
        type="button"
        onclick="showFunction()"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-list">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Contact</a
            >
          </li>
          <li>
            <div v-if="canLogin">
              <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Dashboard
              </Link>
              <template v-else>
                <Link
                  :href="route('login')"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Log in</Link
                >
              </template>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-1 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
      <div class="flex flex-col justify-center">
        <h1 v-if="slider && slider.judul" class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {{ slider.judul }}
        </h1>
        <p v-if="slider && slider.konten" class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {{ slider.konten }}
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Learn more
          </a>
        </div>
      </div>
      <div>
        <LottieAnimation :animation-data="WatermelonJSON" :auto-play="true" :height="100" :loop="true" :speed="1" ref="anim" />
      </div>
    </div>
  </section>
  <section cclass="bg-grey-50" id="about">
    <div class="mx-auto max-w-screen-xl container flex flex-col items-center py-16 md:py-20 lg:flex-row">
      <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
        <h2 class="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">Who am I?</h2>
        <h4 v-if="about && about.judul" class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">{{ about.judul }}</h4>
        <p v-if="about && about.konten" class="pt-6 font-body leading-relaxed text-grey-20">{{ about.konten }}</p>
        <div class="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
          <div class="flex items-center justify-center sm:justify-start">
            <a href="https://www.instagram.com/mujiyantosvc/" class="font-body text-lg font-semibold uppercase text-grey-20"> Connect with me </a>
            <div class="hidden sm:block">
              <i class="bx bx-chevron-right text-2xl text-primary"></i>
            </div>
          </div>
          <div class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
            <a href="/">
              <i class="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
            </a>
            <a href="/" class="pl-4">
              <i class="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
            </a>
            <a href="/" class="pl-4">
              <i class="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
            </a>
            <a href="/" class="pl-4">
              <i class="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
            </a>
            <a href="/" class="pl-4">
              <i class="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
        <div v-for="item in skill" :key="item.id">
          <div class="flex items-end justify-between">
            <h4 class="font-body font-semibold uppercase text-black">{{ item.judul }}</h4>
            <h3 class="font-body text-3xl font-bold text-primary">{{ item.konten }}%</h3>
          </div>
          <div class="mt-2 bg-lila w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: {{item.konten}}%"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="mx-auto max-w-screen-xl  px-4 sm:px-6">
      <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
        <div className="sm:col-span-12 lg:col-span-3">
          <div className="mb-2">
            <Logo />
          </div>
          <div className="text-sm text-gray-600">
            <img src="img/logo_Web.png" class="h-8 mr-3" alt=" Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-dark">Dosen AI</span>
          </div>
        </div>
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 className="text-gray-800 font-medium mb-2">Products</h6>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Web Studio</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">DynamicBox Flex</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Programming Forms</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Integrations</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Command-line</a>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Center</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</a>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 className="text-gray-800 font-medium mb-2">Company</h6>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company values</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</a>
            </li>
            <li className="mb-2">
              <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
          <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
          <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
          <form>
            <div className="flex flex-wrap mb-4">
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                <div className="relative flex items-center max-w-xs">
                  <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                  <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                    <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                    <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li>
            <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
              </svg>
            </a>
          </li>
          <li className="ml-4">
            <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
              </svg>
            </a>
          </li>
          <li className="ml-4">
            <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="text-sm text-gray-600 mr-4">&copy; Amikom. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>
<style></style>
