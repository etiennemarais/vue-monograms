<template>
    <div class="app">
        <div class="container is-fluid">
            <div class="columns">
                <div class="column is-12">
                    <div class="columns">
                        <div class="column is-full">
                            <h1 class="title is-1 has-text-centered">VueJS SVG Monograms</h1>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-1">&nbsp;</div>
                        <div class="column is-2">
                            <monogram width="80" letters="XB" :primary-color="'#00a8e8'" />
                        </div>
                        <div class="column is-2">
                            <monogram width="80" letters="EM" :primary-color="'#f44336'" />
                        </div>
                        <div class="column is-2">
                            <monogram width="80" letters="BR" :primary-color="'#7DCFB6'" />
                        </div>
                        <div class="column is-2">
                            <monogram width="80" letters="PT" :primary-color="'#F4A259'" />
                        </div>
                        <div class="column is-2">
                            <monogram width="80" letters="AM" :primary-color="'#96939B'" />
                        </div>
                        <div class="column is-1">&nbsp;</div>
                    </div>
                    <div class="columns"><div class="column is-full">&nbsp;</div></div>
                    <div class="columns">
                        <div class="column is-full has-text-centered">
                            <a class="github-button" href="https://github.com/etiennemarais/vue-monograms/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork etiennemarais/vue-monograms on GitHub">Fork</a>
                            <a class="github-button" href="https://github.com/etiennemarais/vue-monograms" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star etiennemarais/vue-monograms on GitHub">Star</a>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-full">
                            <pre>
                                <code class="javascript">
// app.vue
&lt;template&gt;
    &lt;monogram width="80" letters="EM" :primary-color="primaryColor" /&gt;
&lt;/template&gt;

&lt;script&gt;
import Monogram from 'vue-monograms';

export default {
    name: "App",
    components: {
        Monogram,
    },
    data() {
        return {
            primaryColor: '#f44336'
        }
    }
};
&lt;/script&gt;
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-12">
                    <p class="love has-text-centered">Made with <span class="icon"><i class="fa fa-heart"></i></span> in Cape Town by <a href="https://twitter.com/etbal">etbal</a></p>
                </div>
            </div>
            <div class="bottom">&nbsp;</div>
        </div>
    </div>
</template>

<script>

export default {
    name: "App"
};
</script>
