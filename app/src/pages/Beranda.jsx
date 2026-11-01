// beranda.jsx
import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className="beranda-card">
      <h1>Watchly</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>Ada {items.length} tontonan dalam {jumlahKategori} kategori.</p>
      )}
      <Link to="/koleksi" className="btn-lihat">Lihat semua tontonan</Link>
    </section>
  )
}