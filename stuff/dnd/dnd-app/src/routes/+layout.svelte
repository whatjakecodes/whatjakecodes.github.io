<script>
    import {onMount} from 'svelte';
    import {dndSRDStore} from '$lib/stores/DnD5eStore';
    import '../app.css';

    onMount(() => {
        dndSRDStore.fetchClasses();
    });
</script>

<slot/>