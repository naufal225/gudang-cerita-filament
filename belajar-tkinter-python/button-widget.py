import tkinter as tk

def tambah_angka():
    current_value = int(label_angka.cget("text"))
    label_angka.config(text=str(current_value+1))
    
def reset():
    label_angka.config(text="0")

root = tk.Tk()
root.title("Aplikasi Counter")
root.geometry("250x200")

label_angka = tk.Label(root, text="0", font=("Arial",30))
label_angka.pack(pady=20)

btn_tambah = tk.Button(root, text="Tambah Angka",command=tambah_angka,bg="green",fg="white",font=("Helectiva",10,"bold"))
btn_tambah.pack(pady=5)

btn_reset = tk.Button(root, text="Reset", command=reset, bg="red",fg="white",font=("Helectiva",10,"bold"))
btn_reset.pack(pady=5)

root.mainloop()