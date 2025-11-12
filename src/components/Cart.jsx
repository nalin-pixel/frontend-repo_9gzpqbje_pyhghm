export default function Cart() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-light">Your Bag</h1>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[1,2].map((i) => (
              <div key={i} className="flex items-center gap-4 border border-black/10 p-4">
                <div className="w-24 h-28 bg-gray-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm9kdWN0fGVufDB8MHx8fDE3NjI5ODE5MDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-black">Wool-Blend Overcoat</p>
                  <p className="text-xs text-black/60 mt-1">Size M</p>
                </div>
                <div className="text-sm text-black/70">$1,290</div>
              </div>
            ))}
          </div>

          <div className="border border-black/10 p-6 h-max">
            <h2 className="text-lg font-light">Order Summary</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>$2,580</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>Calculated at checkout</span></div>
              <div className="flex justify-between"><span>Tax</span><span>$232</span></div>
              <div className="border-t border-black/10 my-3"></div>
              <div className="flex justify-between font-medium"><span>Total</span><span>$2,812</span></div>
            </div>
            <button className="mt-6 w-full py-3 bg-black text-white text-sm uppercase tracking-widest">Checkout</button>
          </div>
        </div>
      </div>
    </main>
  )
}
