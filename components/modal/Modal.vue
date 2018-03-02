<template>
    <transition :name="animation">
        <div v-if="isActive" class="modal is-active">
            <div class="modal-background" @click="cancel('outside')"/>
            <div
                class="animation-content modal-content"
                :style="{ maxWidth: newWidth }">
                <div class="card">
                        <agile :fade="true" :arrows="false">
                            <div v-for="(i, key) in itemData.images" :key="key" class="slide" :class="'slide--'+key">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img :src="i">
                                    </figure>
                                </div>
                            </div>
                        </agile>
                    <div class="card-content">
                        <h3 class="title is-4">{{ itemData.title }}</h3>
                        <h4 v-if="itemData.subtitle" class="subtitle is-5">{{ itemData.subtitle }}</h4>

                        <div class="content" v-if="itemData.caption">
                            {{itemData.caption}}
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                v-if="showX"
                class="modal-close is-large"
                @click="cancel('x')"/>
        </div>
    </transition>
</template>

<script>
import Agile from '../Agile.vue'
    export default {
        name: 'Modal',
        components: {
            Agile
        },
        props: {
            itemData: Object,
            active: Boolean,
            component: [Object, Function],
            content: String,
            programmatic: Boolean,
            props: Object,
            events: Object,
            width: {
                type: [String, Number],
                default: 960
            },
            hasModalCard: Boolean,
            animation: {
                type: String,
                default: 'zoom-out'
            },
            canCancel: {
                type: [Array, Boolean],
                default: () => ['escape', 'x', 'outside', 'button']
            },
            onCancel: {
                type: Function,
                default: () => {}
            },
            scroll: {
                type: String,
                default: 'clip',
                validator: (value) => {
                    return [
                        'clip',
                        'keep'
                    ].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                isActive: this.active || false,
                savedScrollTop: null,
                newWidth: typeof this.width === 'number'
                    ? this.width + 'px'
                    : this.width
            }
        },
        computed: {
            cancelOptions() {
                return typeof this.canCancel === 'boolean'
                    ? this.canCancel
                        ? ['escape', 'x', 'outside', 'button']
                        : []
                    : this.canCancel
            },
            showX() {
                return this.cancelOptions.indexOf('x') >= 0
            }
        },
        watch: {
            active(value) {
                this.isActive = value
            },
            isActive() {
                this.handleScroll()
            }
        },
        methods: {
            handleScroll() {
                if (typeof window === 'undefined') return

                if (this.scroll === 'clip') {
                    document.documentElement.classList.toggle('is-clipped', this.isActive)
                    return
                }

                this.savedScrollTop = !this.savedScrollTop
                    ? document.documentElement.scrollTop
                    : this.savedScrollTop

                document.body.classList.toggle('is-noscroll', this.isActive)

                if (this.isActive) {
                    document.body.style.top = `-${this.savedScrollTop}px`
                    return
                }

                document.documentElement.scrollTop = this.savedScrollTop
                document.body.style.top = null
                this.savedScrollTop = null
            },

            /**
             * Close the Modal if canCancel and call the onCancel prop (function).
             */
            cancel(method) {
                if (this.cancelOptions.indexOf(method) < 0) return

                this.onCancel.apply(null, arguments)
                this.close()
            },

            /**
             * Call the onCancel prop (function).
             * Emit events, and destroy modal if it's programmatic.
             */
            close() {
                this.$emit('close')
                this.$emit('update:active', false)

                // Timeout for the animation complete before destroying
                if (this.programmatic) {
                    this.isActive = false
                    setTimeout(() => {
                        this.$destroy()
                        if (typeof this.$el.remove !== 'undefined') {
                           this.$el.remove()
                        } else {
                           this.$el.parentNode.removeChild(el)
                        }
                    }, 150)
                }
            },

            /**
             * Keypress event that is bound to the document.
             */
            keyPress(event) {
                // Esc key
                if (event.keyCode === 27) this.cancel('escape')
            }
        },
        created() {
            if (typeof window !== 'undefined') {
                document.addEventListener('keyup', this.keyPress)
            }
        },
        beforeMount() {
            // Insert the Modal component in body tag
            // only if it's programmatic
            this.programmatic && document.body.appendChild(this.$el)
        },
        mounted() {
            if (this.programmatic) this.isActive = true
            else if (this.isActive) this.handleScroll()
        },
        beforeDestroy() {
            if (typeof window !== 'undefined') {
                document.removeEventListener('keyup', this.keyPress)
            }
        }
    }
</script>
