var plan = [
  {
    title: "Basic",
    price: "$10/month",
    users: "10 users included",
    storage: "2 GB of storage",
    support: "Email support",
    help: "Help center access",
  },
  {
    title: "Pro",
    price: "$30/month",
    users: "100 users included",
    storage: "20 GB of storage",
    support: "Priority email support",
    help: "Help center access",
  }
]

document.body.style = "display: flex; justify-content: center";
var listPlan = document.createElement('ul');
listPlan.classList.add('list-group');

var showPlan = plan.forEach(item => {
  var itemPlan = document.createElement('li');
  itemPlan.classList.add('item');

  var plan = document.createElement('div');
  plan.classList.add('plan');

  var title = document.createElement('p');
  title.innerHTML = item.title;
  title.classList.add('title');

  var divInfo = document.createElement('div');
  divInfo.classList.add('info');

  var price = document.createElement('p');
  price.innerHTML = item.price;
  price.classList.add('price');

  var users = document.createElement('p');
  users.innerHTML = item.users;
  users.classList.add('detail');

  var storage = document.createElement('p');
  storage.innerHTML = item.storage;
  storage.classList.add('detail');

  var support = document.createElement('p');
  support.innerHTML = item.support;
  support.classList.add('detail');

  var help = document.createElement('p');
  help.innerHTML = item.help;
  help.classList.add('detail');

  var btn = document.createElement('button');
  btn.classList.add('btn');
  if (item.title === "Basic") {
    btn.innerHTML = "Get Started";
    btn.classList.add('btn-primary');
  }
  else {
    btn.innerHTML = "Buy Now";
    btn.classList.add('btn-secondary');
  }

  divInfo.appendChild(price);
  divInfo.appendChild(users);
  divInfo.appendChild(storage);
  divInfo.appendChild(support);
  divInfo.appendChild(help);
  divInfo.appendChild(btn);

  plan.appendChild(title);
  plan.appendChild(divInfo);

  itemPlan.appendChild(plan);

  listPlan.appendChild(itemPlan);
})

document.body.appendChild(listPlan);
