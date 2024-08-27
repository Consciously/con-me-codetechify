import Block from '@/components/ui/custom-block-structure';
import H4 from '@/components/ui/h4';

export default function DropzoneNoAccess() {
	return (
		<Block>
			<Block.Item>
				<H4>
					<span>You do not have access to this resource.</span>
				</H4>
			</Block.Item>
		</Block>
	);
}
