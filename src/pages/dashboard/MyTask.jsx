import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useDnd from '../../hooks/useDnd';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'TASK';

const Task = ({ taskItem, handleDelete }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: taskItem,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className='grid grid-cols-4 items-center gap-5 border-2 px-4 py-2 rounded-xl'
    >
      <div className="font-bold text-sm">{taskItem.task}</div>
      <div className="text-xs">{taskItem.description}</div>
      <div className='text-xs font-bold text-right'>{taskItem.priority}</div>
      <button
        onClick={() => handleDelete(taskItem._id)}
        className="btn btn-ghost btn-sm text-xl rounded-full text-red-600"
      >
        <IoMdRemoveCircleOutline />
      </button>
    </div>
  );
};

const MyTask = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [tasks, refetch] = useDnd();

  const defaultValues = {
    email: user?.email || '',
  };

  const onSubmit = (data) => {
    const taskInfo = {
      task: data.task,
      description: data.description,
      priority: data.priority,
      email: data.email,
      status: 'todo',
    };

    axiosPublic
      .post('/tasks', taskInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Task Added!',
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00d9de',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your task has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  const [, dropTodo] = useDrop({
    accept: ItemType,
    drop: (item, monitor) => {
      const droppedOn = monitor.getItemType();
      if (droppedOn === ItemType) {
        const updatedTask = {
          ...item,
          status: 'todo',
        };
        axiosPublic.put(`/tasks/${item._id}`, updatedTask).then(() => {
          refetch();
        });
      }
    },
  });

  const [, dropInProgress] = useDrop({
    accept: ItemType,
    drop: (item, monitor) => {
      const droppedOn = monitor.getItemType();
      if (droppedOn === ItemType) {
        const updatedTask = {
          ...item,
          status: 'in-progress',
        };
        axiosPublic.put(`/tasks/${item._id}`, updatedTask).then(() => {
          refetch();
        });
      }
    },
  });

  const [, dropCompleted] = useDrop({
    accept: ItemType,
    drop: (item, monitor) => {
      const droppedOn = monitor.getItemType();
      if (droppedOn === ItemType) {
        const updatedTask = {
          ...item,
          status: 'completed',
        };
        axiosPublic.put(`/tasks/${item._id}`, updatedTask).then(() => {
          refetch();
        });
      }
    },
  });

  const renderTasks = (taskList, dropRef) => {
    const [, drop] = useDrop({
      accept: ItemType,
      drop: (item, monitor) => {
        const droppedOn = monitor.getItemType();
        if (droppedOn === ItemType) {
          const updatedTask = {
            ...item,
            status: 'todo',
          };
          axiosPublic.put(`/tasks/${item._id}`, updatedTask).then(() => {
            refetch();
          });
        }
      },
    });

    return (
      <div ref={dropRef}>
        {taskList.map((taskItem) => (
          <Task key={taskItem._id} taskItem={taskItem} handleDelete={handleDelete} />
        ))}
      </div>
    );
  };

  return (
    <div className="lg:mx-10 md:mx-10 mx-5 mt-5 lg:mb-20 md:mb-10 mb-5">
      <div className="flex justify-center items-center mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            className="rounded-md border-0 text-white bg-transparent"
            placeholder="Email"
            {...register('email', { required: true })}
            defaultValue={defaultValues.email}
          />
          <div className="flex lg:flex-row md:flex-row flex-col justify-center mx-auto gap-5 items-center">
            <input
              type="text"
              placeholder="Task Title"
              {...register('task', { required: true })}
              className="rounded-md border-2 border-[#00d9de]"
            />
            <input
              type="text"
              placeholder="Task Description"
              {...register('description', { required: true })}
              className="rounded-md border-2 border-[#00d9de]"
            />
            <select {...register('priority', { required: true })} className="rounded-md border-2 border-[#00d9de]">
              <option selected>Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <input
              className="bg-gradient-to-t from-[#0b4a75] to-[#00d9de] text-sm text-white font-bold px-4 py-3 rounded-md hover:bg-gradient-to-t hover:from-[#00d9de] hover:to-[#0b4a75] hover:text-white"
              type="submit"
              value="Add Task"
            />
          </div>
        </form>
      </div>

      {/* for drag and drop */}
      <div className="mt-10">
        <div className="flex lg:flex-row md:flex-row flex-col gap-4">
          <div className='w-full'>
            <h1 className="text-2xl font-semibold text-white mb-3 bg-blue-600 rounded-xl text-center py-2">
              To-Do
            </h1>
            {renderTasks(tasks.filter((task) => task.status === 'todo'), dropTodo)}
          </div>

          <div className='w-full'>
            <h1 className="text-2xl font-semibold text-white mb-3 bg-yellow-400 rounded-xl text-center py-2">
              In-Progress
            </h1>
            {renderTasks(tasks.filter((task) => task.status === 'in-progress'), dropInProgress)}
          </div>

          <div className='w-full'>
            <h1 className="text-2xl font-semibold text-white mb-3 bg-green-500 rounded-xl text-center py-2">
              Completed
            </h1>
            {renderTasks(tasks.filter((task) => task.status === 'completed'), dropCompleted)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTask;

