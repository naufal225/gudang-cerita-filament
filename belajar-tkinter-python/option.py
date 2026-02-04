import tkinter as tk

def ubah_tampilan():
    label_info.config(text="Berubah", fg="white", bg="darkgreen")
    btn_ubah.config(state="disabled", text="Sudah berubah")

root = tk.Tk()
root.title("Latihan Option")
root.geometry("400x300")

label_info = tk.Label(root, text="Text asli", bg="lightgray", width=30, height=3)
label_info.pack(pady=30)

btn_ubah = tk.Button(root, text="Ubah", command=ubah_tampilan)
btn_ubah.pack()

root.mainloop()