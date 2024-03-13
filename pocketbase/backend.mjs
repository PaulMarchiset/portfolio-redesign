import PocketBase from 'pocketbase';

var pocketbase_ip = '';
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = '193.168.146.150:80';
} else {
  pocketbase_ip = 'http://127.0.0.1:8090';
}

const pb = new PocketBase(pocketbase_ip);

export async function allCommande() {
  const records = await pb.collection('commande').getFullList();
  return records;
}

