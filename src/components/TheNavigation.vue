<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
</script>
<template>
    <Navbar solid :key="links">
        <template #logo>
            <NavbarLogo link="/" alt="" image-url="">
                Shoebill Stork
            </NavbarLogo>
        </template>
        <template #default="{ isShowMenu }" :key="links">
            <NavbarCollapse :isShowMenu="isShowMenu" @click="updateHighlight" :key="links">
                <router-link v-for="item in links" :to="item.link" :key="links">
                    <NavbarLink v-if="item.active" :key="links"><span class="text-green-600">{{ item.name }}</span>
                    </NavbarLink>
                    <NavbarLink v-else :key="changeListener">{{ item.name }}</NavbarLink>
                </router-link>

            </NavbarCollapse>
        </template>
        <!-- <template #menu-icon>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                </path>
            </svg>
    </template> -->
</Navbar>
<!--

        { name: "Home", link: "/", active: false },
        { name: "Circulatory System", link: "/Circulatory-System", active: false },
        { name: "Digestive System", link: "/Digestive-System", active: false },
        { name: "Respiratory System", link: "/Respiratory-System", active: false },
        { name: "Reproduction and Parental Behavior", link: "/Reproduction-and-Parental-Behavior", active: false },
        { name: "Evolution and Adaptation", link: "/Evolution-and-Adaptation", active: false },
        { name: "Conservation Status", link: "/Conservation-Status", active: false },
      ]



        -->
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: "Home", link: "/", active: false },
                { name: "Evolution ", link: "/Evolution", active: false },
                { name: "Reproduction and Parental Behavior", link: "/Reproduction-and-Parental-Behavior", active: false },
                { name: "Respiratory System", link: "/Respiratory-System", active: false },
                { name: "Circulatory System", link: "/Circulatory-System", active: false },
                { name: "Digestive System", link: "/Digestive-System", active: false },
                { name: "Conservation Status", link: "/Conservation-Status", active: false },
                { name: "Reasources", link: "/Reasources", active: false }
            ], changeListener: false
        }
    },
    created() {
        this.updateHighlight();
    },
    watch: {
        $route(to, from) {
            this.updateHighlight()
        }
    },
    methods: {
        updateHighlight() {
            this.links.forEach(link => {
                link.active = link.link == window.location.pathname;
            });
            console.log(window.location.pathname)
            console.log(this.links)
            this.changeListener = !this.changeListener;
        }
    }
}

</script>


<style>
@media screen and (max-width: 1300px){
    body {
        text-align: center;
    }
    
}
</style>
