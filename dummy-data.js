// dummy-data.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/users'; // adjust if needed

const dummyUsers = [
  {
    firstName: 'John', lastName: 'Doe', email: 'john.doe1@example.com',
    phone: '9876543210', address: '123 Main St, City A', status: 'active',
    gender: 'male', location: 'City A', profile: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    firstName: 'Jane', lastName: 'Smith', email: 'jane.smith1@example.com',
    phone: '9876543211', address: '456 Elm St, City B', status: 'inactive',
    gender: 'female', location: 'City B', profile: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson1@example.com',
    phone: '9876543212', address: '789 Pine St, City C', status: 'active',
    gender: 'female', location: 'City C', profile: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    firstName: 'Bob', lastName: 'Williams', email: 'bob.williams1@example.com',
    phone: '9876543213', address: '321 Oak St, City D', status: 'active',
    gender: 'male', location: 'City D', profile: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    firstName: 'Emma', lastName: 'Brown', email: 'emma.brown1@example.com',
    phone: '9876543214', address: '654 Cedar St, City E', status: 'inactive',
    gender: 'female', location: 'City E', profile: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    firstName: 'Michael', lastName: 'Davis', email: 'michael.davis1@example.com',
    phone: '9876543215', address: '987 Birch St, City F', status: 'active',
    gender: 'male', location: 'City F', profile: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    firstName: 'Olivia', lastName: 'Miller', email: 'olivia.miller1@example.com',
    phone: '9876543216', address: '159 Spruce St, City G', status: 'active',
    gender: 'female', location: 'City G', profile: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    firstName: 'William', lastName: 'Wilson', email: 'william.wilson1@example.com',
    phone: '9876543217', address: '753 Maple St, City H', status: 'inactive',
    gender: 'male', location: 'City H', profile: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    firstName: 'Sophia', lastName: 'Moore', email: 'sophia.moore1@example.com',
    phone: '9876543218', address: '852 Walnut St, City I', status: 'active',
    gender: 'female', location: 'City I', profile: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    firstName: 'James', lastName: 'Taylor', email: 'james.taylor1@example.com',
    phone: '9876543219', address: '951 Chestnut St, City J', status: 'active',
    gender: 'male', location: 'City J', profile: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
];

async function addDummyUsers() {
  for (const user of dummyUsers) {
    try {
      const res = await axios.post(API_BASE_URL, user);
      console.log(`Added: ${res.data.data.firstName} ${res.data.data.lastName}`);
    } catch (err) {
      console.error(`Error adding ${user.firstName}:`, err.response?.data || err.message);
    }
  }
}

addDummyUsers();
