import tkinter as tk

root = tk.Tk()
root.title("Contoh Label")
root.geometry("200x200")

label_1 = tk.Label(root, text="Ini Label")
label_1.pack(pady=10)

root.mainloop()