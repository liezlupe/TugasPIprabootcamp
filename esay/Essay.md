Essay
Apa itu React?
Apa keunggulan React?
Apa itu SPA pada React?
Apa itu state dan props? Apa perbedaannya?
Kapan harus menggunakan state dan props? Berikan contoh studi kasus
Apa itu state management dan kapan harus menggunakannya?
Apa itu ORM/ODM?
Apa perbedaan SQL dan NoSQL?

1. React adalah pustaka Javascript yang digunakan untuk menyelesaikan kasus yang rumit, dan membangun user interface.
2. Dibangun menggunakan Javascript sehingga mudah dipahami, 
    - Reusable komponen
    - menggunakan virtual DOM sehinga dapat memperbarui tampilan aplikasi dengan efisien, hanya memperbarui komponen yang berubah daripada seluruh halaman
    -Pendekatan DEklaratif untuk membuat UI , react akan menangani pembaharuan tampilan secara otomatis.
    -Mempunyai komunitas yang kuat sehingga mudah menemukan solusi ketika mendapat permasalahan seputr react.
    -SEO friendly.

3. SPA adalah Single page Aplication , yaitu web yang memuat satu dokumen web. 
4. State adlah data private pada sebuah component dan tidak bisa diakses oleh component lain. 
props adalah objek yang digunakan untuk menyimpan data yang diterima dari luar komponen.
perbedaan nya adalah :  props diteruskan ke komponen (mirip dengan function parameters) sedangkan state dikelola dalam komponen (mirip dengan variabel yang dideklarasikan dalam suatu function).
5. 
A. Props ketika kita membutuhkan data item pada suatu aplikasi.
contoh : PokemonList berisi daftar item pokemon.
Setiap item di dalam daftar pokedex direpresentasikan oleh PokeItem.

import React from 'react';
import PokeItem from './PokeItem';

const PokemonList = ({ items }) => (
    <div>
        <h2>Pokemon List</h2>
            <ul>
                {items.map(item => (
                    <PokeItem key={item.id} item={item} />
                ))}
            </ul>
    </div>
                );

export default PokemonList;

B. State
Digunakan ketika ingin menambahkan item 

contoh : 
const PokeList = () => {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');

}

6.  proses mengelola dan menyimpan status atau kondisi dari sebuah aplikasi dalam suatu waktu tertentu.
digunakan saat aplikasi menerapkan logika bisnis kompleks, pengelolaan cache, optimasi kerja, aplikasi yang banyak penggunanya. 

7. ORM (Object-Relational Mapping) dan ODM (Object-Document Mapping) adalah dua konsep dalam pengembangan perangkat lunak yang digunakan untuk memetakan objek dari representasi data ke struktur data yang berbeda, seperti basis data relasional atau dokumen dalam basis data NoSQL.

8. Perbedaan Antara SQL dan NoSQL. SQL adalah bahasa pemrograman yang digunakan untuk berinteraksi dengan database relasional. (Database relasional memodelkan data sebagai catatan dalam baris dan tabel, dengan tautan logis di antara keduanya). NoSQL merupakan kelas DBM yang bersifat non-relasional dan umumnya tidak menggunakan SQL .