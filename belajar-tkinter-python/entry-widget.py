import tkinter as tk

def sapa_user():
    # Menggunakan .get() untuk mengambil input
    nama = entry_nama.get()
    if nama:
        label_hasil.config(text=f"Halo, {nama}!", fg="blue")
    else:
        label_hasil.config(text="Silakan isi nama dulu!", fg="red")

def hapus_teks():
    # Menggunakan .delete() dari indeks 0 sampai akhir
    entry_nama.delete(0, tk.END)
    label_hasil.config(text="")

def isi_otomatis():
    # Pastikan kosong dulu sebelum insert agar tidak menumpuk
    entry_nama.delete(0, tk.END)
    # Menggunakan .insert() untuk mengisi teks default
    entry_nama.insert(0, "Guest User")

root = tk.Tk()
root.title("Entry")
root.geometry("350x250")

# Membuat Label dan Entry
tk.Label(root, text="Masukkan nama Anda:").pack(pady=10)
entry_nama = tk.Entry(root, width=30)
entry_nama.pack(pady=5)

# Tombol-tombol untuk memicu method
btn_sapa = tk.Button(root, text="Sapa Saya", command=sapa_user)
btn_sapa.pack(pady=5)

btn_isi = tk.Button(root, text="Isi Default", command=isi_otomatis)
btn_isi.pack(pady=5)

btn_hapus = tk.Button(root, text="Hapus", command=hapus_teks)
btn_hapus.pack(pady=5)

label_hasil = tk.Label(root, text="", font=("Arial", 12, "bold"))
label_hasil.pack(pady=10)

root.mainloop()