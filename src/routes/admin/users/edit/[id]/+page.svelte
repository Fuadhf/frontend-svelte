<script>
  import SidebarMenu from "../../../../../components/SidebarMenu.svelte";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";

  /** @type {import('./$types').ActionData}*/
  export let form;
  export let data;

  $: if (form?.success) {
    goto("/admin/users");
  }
</script>

<div class="container mt-5 mb-5 ">
  <div class="row">
    <div class="col-md-3">
      <SidebarMenu/>
    </div>
    <div class="col-md-9">
      <div class="card border-0 rounded shadow-sm">
        <div class="card-header">Edit User</div>
        <div class="card-body">
          <form action="?/update" method="POST" use:enhance>
            <div class="form-group mb-3" >
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="fw-bold mb-1">Full Name</label>
              <input type="text" name="name" class="form-control {form?.errors?.some((e) => e.path === 'name') ? 'is-invalid' : ''}" placeholder="Full Name" value={form?.values?.name ?? data.user?.name ?? ''}>
              {#if form?.errors?.some((e) => e.path === "name")}
              <div class="invalid-feedback">
                {form.errors.find((e) => e.path === "name").msg}
              </div>
              {/if}
            </div>
            
            <div class="form-group mb-3" >
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="fw-bold mb-1">Email address</label>
              <input type="email" name="email" class="form-control {form?.errors?.some((e) => e.path === 'email') ? 'is-invalid' : ''}" placeholder="Email address" value={form?.values?.email ?? data.user?.email ?? ''}>
              {#if form?.errors?.some((e) => e.path === "email")}
              <div class="invalid-feedback">
                {form.errors.find((e) => e.path === "email").msg}
              </div>
              {/if}
            </div>

            <div class="form-group mb-3" >
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="fw-bold mb-1">Password</label>
              <input type="password" name="password" class="form-control {form?.errors?.some((e) => e.path === 'password') ? 'is-invalid' : ''}" placeholder="Password">
              {#if form?.errors?.some((e) => e.path === "password")}
              <div class="invalid-feedback">
                {form.errors.find((e) => e.path === "password").msg}
              </div>
              {/if}
            </div>

            <button type="submit" class="btn btn-sm btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>