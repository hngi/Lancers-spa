<template>
    <tr class="py-2">
        <td scope="row" class="rounded-left border border-right-0">
            <span class="text-small text-muted mr-2">
                <i class="fas fa-circle"></i>
            </span> 
            <span class="">{{project.created_at.split(" ")[0] | slashtime}}</span>
        </td>
        <td class="border-top border-bottom">Foodie</td>
        <td class="border-top border-bottom">{{project.estimate.start | slashtime}}</td>
        <td class="border-top border-bottom text-right">₦{{project.invoice == null  ? 0 : project.invoice.amount_paid  | formatnum}}</td>
        <td class="border-top border-bottom text-right">₦{{project.estimate == null ? 0 : project.estimate.estimate | formatnum}}</td>
        <td class="border-top border-bottom">
            <span class="alert py-2 px-2 small m-0" :class="project.status == 'pending' ? 'alert-warning' : (project.status == 'in-progress' ? 'alert-primary' : 'alert-success')">{{project.status}}</span>
        </td>
        <td class="rounded-right border border-left-0">
            <div class="dropdown dropleft">
                <a class="btn btn-white btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item text-success" href="#"><i class="fas fa-binoculars"></i> View</a>
                    <a class="dropdown-item text-secondary" href="#"><i class="fas fa-edit"></i> Edit</a>
                    <a class="dropdown-item text-danger" href="#"><i class="fas fa-trash-alt"></i> Delete</a>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        project: Object
    },
    created(){
        console.log("hee")
    }
}
</script>
