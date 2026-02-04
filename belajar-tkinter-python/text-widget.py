import tkinter as tk

def ambil_teks():
    # Ambil teks dari baris 1, karakter 0 sampai akhir
    print(kotak_teks.get("1.0", tk.END))

root = tk.Tk()

# 1. Membuat widget Text
kotak_teks = tk.Text(root, height=5, width=30)
kotak_teks.pack()

# 2. Tombol untuk mengambil teks
tk.Button(root, text="Cetak", command=ambil_teks).pack()

root.mainloop()