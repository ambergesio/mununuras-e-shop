import config from '../congif';
const prodsPath = 'api/productos';
const ordersPath = 'api/ordenes';
const loginPath = 'login'


const getAllProducts = async () => {
  return await fetch(`${config.beppath}/${prodsPath}`);
};

const getProductDetail = async (id) => {
  return await fetch(`${config.beppath}/${prodsPath}/${id}`);
};

const getByCategory = async (category) => {
  return await fetch(`${config.beppath}/${prodsPath}/categoria/${category}`);
};

const getBySearchParam = async (search) => {
  return await fetch(`${config.beppath}/${prodsPath}/nombre/${search}`);
};


const checkOrderById = async (id) => {
  return await fetch(`${config.beppath}/${ordersPath}/${id}`);
};

const paymentApproval = async (id) => {
  return await fetch(`${config.beppath}/${ordersPath}/${id}`, {
    method: "post"
  })
};

const rejectPayment = async (id) => {
  return await fetch(`${config.beppath}/${ordersPath}/${id}`, {
    method: "put"
})
};

const activateOrder = async (order) => {
  return await fetch(`${config.beppath}/${ordersPath}`, {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(order)
  })
};

const deleteOrder = async (id) => {
  return await fetch(`${config.beppath}/${ordersPath}/${id}`, {
    method: 'delete'
  });
};

const removeFromStock = async (id) => {
  return await fetch(`${config.beppath}/${ordersPath}/descontar/${id}`, {
    method: 'POST'
  })
};

const LogInUser = async (data) => {
  return await fetch(`${config.beppath}/${loginPath}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}


export { getAllProducts, getProductDetail, getByCategory, getBySearchParam, checkOrderById, paymentApproval, rejectPayment, activateOrder, deleteOrder, removeFromStock, LogInUser };