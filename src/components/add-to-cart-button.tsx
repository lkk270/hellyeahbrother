'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { toast } from 'sonner';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  priceCents: number;
  imageUrls: string[];
  options?: {
    colors?: string[];
    sizes?: string[];
  };
  inventoryQty: number;
}

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{
    color?: string;
    size?: string;
  }>({});
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (product.inventoryQty === 0) {
      toast.error('This product is out of stock');
      return;
    }

    const cartItem = {
      id: `${product.id}-${JSON.stringify(selectedOptions)}`,
      title: product.title,
      price: product.priceCents / 100,
      imageUrl: product.imageUrls[0],
      quantity,
      options: selectedOptions,
    };

    addItem(cartItem);
    toast.success(`${product.title} added to cart`);
  };

  const incrementQuantity = () => {
    if (quantity < product.inventoryQty) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium text-gray-700">Quantity:</label>
        <div className="flex items-center border border-gray-300 rounded-md">
          <Button
            variant="ghost"
            size="sm"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
            className="h-8 w-8 p-0"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={incrementQuantity}
            disabled={quantity >= product.inventoryQty}
            className="h-8 w-8 p-0"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        disabled={product.inventoryQty === 0}
        className="w-full bg-black text-white hover:bg-gray-800 h-12 text-lg"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        {product.inventoryQty === 0 ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </div>
  );
}
