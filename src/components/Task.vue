<template>
    <tr class="py-2">
        <td scope="row" class="rounded-left border border-right-0">
            <span class="text-small text-muted mr-2">
                <i class="fas fa-circle"></i>
            </span>
            <span class="">5/09/2019</span>
        </td>
        <td class="border-top border-bottom">{{task.project.title}}</td>
        <td class="border-top border-bottom">{{task.name}}</td>
        <td class="border-top border-bottom">
            <span class="alert py-2 px-2 small m-0" :class="task.status == 'pending' ? 'alert-warning' : (task.status == 'in-progress' ? 'alert-primary' : 'alert-success')">{{task.status}}</span>
        </td>
        <td class="border-top border-bottom text-left">{{task.progress}}%</td>
        <td class="border-top border-bottom text-right">
            <div style="position: relative; left: 0; top: 0;">

                <img src="https://res.cloudinary.com/memz/image/upload/v1570714781/download_2_yhhlsm.jpg"
                    width="30px" height="30px" class="woman1" />
                <img src="https://res.cloudinary.com/memz/image/upload/v1570714759/download_3_aym7zh.jpg"
                    width="30px" height="30px" class="woman2" />

            </div>
        </td>
        <td class="rounded-right border border-left-0">
            <div class="dropdown dropleft">
                <a class="btn btn-white btn-sm dropdown-toggle" href="#" role="button"
                    id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item text-success" href="#"><i
                            class="fas fa-binoculars"></i> View</a>
                    <a class="dropdown-item text-secondary" href="#"><i
                            class="fas fa-edit"></i> Edit</a>
                    <a class="dropdown-item text-danger" href="#"><i
                            class="fas fa-trash-alt"></i> Delete</a>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Task",
    props: {
        task: Object
    },
    data: function(){
        return {

        }
    }
}
</script>
